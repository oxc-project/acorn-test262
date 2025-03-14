__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 27,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 23,
                "end": 27
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 189,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 37,
        "end": 189,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 69,
          "end": 189,
          "body": [
            {
              "type": "IfStatement",
              "start": 75,
              "end": 127,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 100,
                "end": 127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 121,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 110,
                      "end": 121,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 113,
                        "decorators": [],
                        "name": "dds",
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 116,
                        "end": 121,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 117,
                            "end": 120,
                            "decorators": [],
                            "name": "dds",
                            "optional": false
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "UnaryExpression",
                "start": 79,
                "end": 98,
                "argument": {
                  "type": "CallExpression",
                  "start": 80,
                  "end": 98,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 97,
                      "decorators": [],
                      "name": "dds",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 80,
                    "end": 93,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 85,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 93,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "operator": "!",
                "prefix": true
              }
            },
            {
              "type": "ForOfStatement",
              "start": 132,
              "end": 172,
              "await": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 172,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 161,
                    "end": 166,
                    "expression": {
                      "type": "CallExpression",
                      "start": 161,
                      "end": 166,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 161,
                        "end": 164,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "left": {
                "type": "VariableDeclaration",
                "start": 137,
                "end": 142,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 141,
                    "end": 142,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "let"
              },
              "right": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "dds",
                "optional": false
              }
            },
            {
              "type": "ReturnStatement",
              "start": 177,
              "end": 187,
              "argument": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "decorators": [],
                "name": "dds",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 54,
          "decorators": [],
          "name": "doRemove",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 55,
            "end": 67,
            "decorators": [],
            "name": "dds",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 67,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 60,
                "end": 67,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 64,
                    "end": 67,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 65,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "F",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
