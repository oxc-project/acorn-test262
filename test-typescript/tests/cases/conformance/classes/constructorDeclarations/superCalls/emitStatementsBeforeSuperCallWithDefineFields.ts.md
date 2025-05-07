__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 143,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 73,
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
              "start": 73,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 120,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 119,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 114,
                          "end": 118,
                          "raw": "'hi'",
                          "value": "hi",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 113,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 109,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 113,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 137,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 129,
                      "end": 136,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 129,
                        "end": 134
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
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 74,
                  "end": 90,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 90,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 84,
                        "end": 90
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 158,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 153,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 156,
              "end": 157,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "decorators": [],
        "name": "Sub",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 162,
      "end": 318,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 318,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 192,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 196,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 239,
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
              "start": 239,
              "end": 316,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 316,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 268,
                    "end": 270,
                    "directive": null,
                    "expression": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 279,
                    "end": 287,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 279,
                      "end": 286,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 279,
                        "end": 284
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 310,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 296,
                      "end": 309,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 296,
                        "end": 305,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 296,
                          "end": 300
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 305,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 308,
                        "end": 309,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 240,
                  "end": 256,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 256,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 248,
                      "end": 256,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 250,
                        "end": 256
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 168,
        "end": 172,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 181,
        "end": 185,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
