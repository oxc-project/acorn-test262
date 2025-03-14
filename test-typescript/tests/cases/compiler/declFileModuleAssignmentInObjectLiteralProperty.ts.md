declFileModuleAssignmentInObjectLiteralProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 40,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 38,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 38,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 31,
                "end": 38,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 49,
            "end": 92,
            "properties": [
              {
                "type": "Property",
                "start": 55,
                "end": 68,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 57,
                  "decorators": [],
                  "name": "m1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 59,
                  "end": 68,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 61,
                      "end": 66,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "m",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 66,
                        "decorators": [],
                        "name": "m1",
                        "optional": false
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 74,
                "end": 89,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 76,
                  "decorators": [],
                  "name": "m2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 78,
                  "end": 89,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 80,
                      "end": 87,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "start": 83,
                        "end": 87,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 85,
                          "decorators": [],
                          "name": "m1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
