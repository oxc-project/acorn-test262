__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 26,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 52,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 47,
              "name": "bar"
            },
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "value": 5,
              "raw": "5"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 73,
              "name": "accessChildProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 238,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 86,
                    "end": 111,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 86,
                      "end": 110,
                      "object": {
                        "type": "NewExpression",
                        "start": 86,
                        "end": 105,
                        "callee": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 95,
                          "name": "Child",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
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
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 106,
                        "end": 110,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 195,
                    "end": 206,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 195,
                      "end": 205,
                      "object": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 200,
                        "name": "Child",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 201,
                        "end": 205,
                        "name": "bar"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 253,
        "name": "Child",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 271,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 411,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 281,
            "end": 294,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 281,
              "end": 285,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 288,
              "end": 293,
              "value": "foo",
              "raw": "\"foo\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 384,
            "end": 397,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 384,
              "end": 388,
              "name": "bar"
            },
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 396,
              "value": "bar",
              "raw": "\"bar\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 255,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 271,
        "end": 274,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 272,
            "end": 273,
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 453,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 452,
        "callee": {
          "type": "MemberExpression",
          "start": 413,
          "end": 450,
          "object": {
            "type": "NewExpression",
            "start": 413,
            "end": 433,
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 423,
              "name": "Parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 450,
            "name": "accessChildProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
