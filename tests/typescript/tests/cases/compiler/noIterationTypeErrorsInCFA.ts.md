__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 27,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 189,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 37,
        "end": 189,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 54,
          "decorators": [],
          "name": "doRemove",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 69,
          "end": 189,
          "body": [
            {
              "type": "IfStatement",
              "start": 75,
              "end": 127,
              "test": {
                "type": "UnaryExpression",
                "start": 79,
                "end": 98,
                "operator": "!",
                "argument": {
                  "type": "CallExpression",
                  "start": 80,
                  "end": 98,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 80,
                    "end": 93,
                    "object": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 85,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 93,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 97,
                      "decorators": [],
                      "name": "dds",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "prefix": true
              },
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
                        "optional": false,
                        "typeAnnotation": null
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ForOfStatement",
              "start": 132,
              "end": 172,
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "start": 137,
                "end": 142,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 141,
                    "end": 142,
                    "id": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "dds",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 161,
                        "end": 164,
                        "object": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
