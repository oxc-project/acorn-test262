classSideInheritance1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 90,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 56,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 56,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 50,
                    "argument": {
                      "type": "Literal",
                      "start": 47,
                      "end": 49,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 88,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
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
              "start": 64,
              "end": 88,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 88,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 77,
                    "end": 86,
                    "argument": {
                      "type": "Literal",
                      "start": 84,
                      "end": 85,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 74,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 68,
                  "end": 74
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 114,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 135,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 145,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 144,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 137,
          "end": 142,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 200,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 193,
          "end": 198,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 257,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 256,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 249,
          "end": 254,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 251,
            "end": 254,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 267,
        "end": 275,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 267,
          "end": 273,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "C2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 273,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
