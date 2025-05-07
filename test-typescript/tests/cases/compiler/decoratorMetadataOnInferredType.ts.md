__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 55,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 110,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 108,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 85,
                    "end": 106,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 85,
                      "end": 105,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 97,
                          "end": 104,
                          "raw": "'new A'",
                          "value": "new A",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 85,
                        "end": 96,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 92,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 96,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 171,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 171,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 130,
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 145,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 145,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 145,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 147,
          "end": 166,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 166,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 160,
              "end": 166
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 173,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 180,
        "end": 223,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 188,
          "end": 223,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 194,
              "end": 221,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 194,
                  "end": 204,
                  "expression": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 204,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 213,
                "end": 220,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
