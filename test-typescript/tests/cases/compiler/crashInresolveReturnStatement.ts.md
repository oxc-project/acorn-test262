__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 386,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 106,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 53,
              "decorators": [],
              "name": "onToolbarItemClick",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 66,
                    "end": 100,
                    "expression": {
                      "type": "CallExpression",
                      "start": 66,
                      "end": 99,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 66,
                        "end": 97,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 76,
                          "decorators": [],
                          "name": "WITDialogs",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 97,
                          "decorators": [],
                          "name": "createCopyOfWorkItem",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
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
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "WorkItemToolbar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 201,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 170,
              "decorators": [],
              "name": "getDialogResult",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 195,
                    "argument": {
                      "type": "Literal",
                      "start": 190,
                      "end": 194,
                      "raw": "null",
                      "value": null
                    }
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
        "start": 115,
        "end": 141,
        "decorators": [],
        "name": "CreateCopyOfWorkItemDialog",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 257,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 254,
        "end": 257,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 233,
        "decorators": [],
        "name": "createWorkItemDialog",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 252,
          "decorators": [],
          "name": "dialogType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 252,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 252,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 252,
                "decorators": [],
                "name": "P0",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 233,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 234,
            "end": 236,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 234,
              "end": 236,
              "decorators": [],
              "name": "P0",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 385,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 383,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 315,
              "decorators": [],
              "name": "createCopyOfWorkItem",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 383,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 383,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 328,
                    "end": 377,
                    "expression": {
                      "type": "CallExpression",
                      "start": 328,
                      "end": 376,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 349,
                          "end": 375,
                          "decorators": [],
                          "name": "CreateCopyOfWorkItemDialog",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 348,
                        "decorators": [],
                        "name": "createWorkItemDialog",
                        "optional": false
                      },
                      "optional": false
                    }
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
        "start": 264,
        "end": 274,
        "decorators": [],
        "name": "WITDialogs",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
