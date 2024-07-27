<Form {...form}>
<form
  onSubmit={form.handleSubmit(onSubmit)}
  className="w-2/3 space-y-6"
>
  <FormField
    control={form.control}
    name="type"
    render={({ field }) => (
      <FormItem className="space-y-3">
        <FormControl>
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex flex-col md:w-[500px]"
          >
            <FormItem className="flex items-center space-y-0">
              <FormControl>
                <RadioGroupItem
                  value="admin"
                  id="admin"
                  className="peer sr-only border"
                  aria-label="Card"
                />
              </FormControl>
              <Label
                htmlFor="admin"
                className="w-full flex flex-row gap-4 items-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <FiUser size={24} className="hidden md:block" />
                <p>
                  I'm an Admin <br />{" "}
                  <span className="text-sm text-gray-600">
                    I am creating an account for my school
                  </span>
                </p>
              </Label>
            </FormItem>
            <FormItem className="flex items-center space-y-0">
              <FormControl>
                <RadioGroupItem
                  value="staff"
                  id="staff"
                  className="peer sr-only border"
                  aria-label="Card"
                />
              </FormControl>
              <Label
                htmlFor="staff"
                className="flex flex-row w-full gap-4 items-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <FiUsers size={24} className="hidden md:block" />
                <p>
                  I'm part of a team <br />{" "}
                  <span className="text-sm text-gray-600">
                    I am joining an existing school as a staff member
                  </span>
                </p>
              </Label>
            </FormItem>
            <FormItem className="flex items-center space-y-0">
              <FormControl>
                <RadioGroupItem
                  value="student"
                  id="student"
                  className="peer sr-only border"
                  aria-label="Card"
                />
              </FormControl>
              <Label
                htmlFor="student"
                className="flex flex-row w-full gap-4 items-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <FiUser size={24} className="hidden md:block" />
                <p>
                  I'm an Student <br />{" "}
                  <span className="text-sm text-gray-600">
                    I am creating a school account
                  </span>
                </p>
              </Label>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  <Button type="submit" variant="outline" className="mt-8">
    Finish
  </Button>
</form>
</Form>
