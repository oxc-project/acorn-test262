__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 23,
                "end": 27
              },
              "start": 21,
              "end": 27
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doRemove",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 54
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "dds",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 61
                    },
                    "typeArguments": null,
                    "start": 60,
                    "end": 61
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 65
                      },
                      "typeArguments": null,
                      "start": 64,
                      "end": 65
                    },
                    "start": 64,
                    "end": 67
                  }
                ],
                "start": 60,
                "end": 67
              },
              "start": 58,
              "end": 67
            },
            "start": 55,
            "end": 67
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 85
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 93
                    },
                    "optional": false,
                    "computed": false,
                    "start": 80,
                    "end": 93
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dds",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 97
                    }
                  ],
                  "optional": false,
                  "start": 80,
                  "end": 98
                },
                "prefix": true,
                "start": 79,
                "end": 98
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dds",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 113
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dds",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 120
                          }
                        ],
                        "start": 116,
                        "end": 121
                      },
                      "start": 110,
                      "end": 121
                    },
                    "directive": null,
                    "start": 110,
                    "end": 121
                  }
                ],
                "start": 100,
                "end": 127
              },
              "alternate": null,
              "start": 75,
              "end": 127
            },
            {
              "type": "ForOfStatement",
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "init": null,
                    "definite": false,
                    "start": 141,
                    "end": 142
                  }
                ],
                "declare": false,
                "start": 137,
                "end": 142
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "dds",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 161,
                          "end": 162
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 164
                        },
                        "optional": false,
                        "computed": false,
                        "start": 161,
                        "end": 164
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 161,
                      "end": 166
                    },
                    "directive": null,
                    "start": 161,
                    "end": 166
                  }
                ],
                "start": 151,
                "end": 172
              },
              "start": 132,
              "end": 172
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "dds",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 187
              },
              "start": 177,
              "end": 187
            }
          ],
          "start": 69,
          "end": 189
        },
        "expression": false,
        "start": 37,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
