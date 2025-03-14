unexportedInstanceClassVariables.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSModuleBlock",
        "start": 8,
        "end": 52,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 11,
            "end": 50,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 18,
              "end": 50,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 47,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 33,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 33,
                    "end": 47,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 45,
                      "end": 47,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 34,
                        "end": 44,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 37,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 38,
                            "end": 44
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null
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
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 54,
      "end": 100,
      "body": {
        "type": "TSModuleBlock",
        "start": 62,
        "end": 100,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 65,
            "end": 75,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 73,
              "end": 75,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 97,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 90,
                  "end": 97,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
