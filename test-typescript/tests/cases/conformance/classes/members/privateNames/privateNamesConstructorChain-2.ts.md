__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 453,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 26,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 47,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 238,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 73,
              "decorators": [],
              "name": "accessChildProps",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 238,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 238,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 86,
                    "end": 111,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 86,
                      "end": 110,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 86,
                        "end": 105,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 95,
                          "decorators": [],
                          "name": "Child",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 95,
                          "end": 103,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 96,
                              "end": 102
                            }
                          ]
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 106,
                        "end": 110,
                        "name": "foo"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 195,
                    "end": 206,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 195,
                      "end": 205,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 200,
                        "decorators": [],
                        "name": "Child",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 201,
                        "end": 205,
                        "name": "bar"
                      }
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
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 411,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 411,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 281,
            "end": 294,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 281,
              "end": 285,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 288,
              "end": 293,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 384,
            "end": 397,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 384,
              "end": 388,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 396,
              "raw": "\"bar\"",
              "value": "bar",
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
        "start": 248,
        "end": 253,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 271,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 271,
        "end": 274,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 272,
            "end": 273,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 255,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 453,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 452,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 413,
          "end": 450,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 413,
            "end": 433,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 423,
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 423,
              "end": 431,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 424,
                  "end": 430
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 450,
            "decorators": [],
            "name": "accessChildProps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
