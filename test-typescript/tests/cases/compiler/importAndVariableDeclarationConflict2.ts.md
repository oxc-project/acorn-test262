importAndVariableDeclarationConflict2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 33,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 31,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 20,
              "end": 31,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 24,
                  "end": 30,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 28,
                    "end": 30,
                    "raw": "''",
                    "value": ""
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 46,
        "end": 49,
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "m",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 98,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 98,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 94,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 93,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 91,
                          "end": 93,
                          "raw": "''",
                          "value": ""
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
