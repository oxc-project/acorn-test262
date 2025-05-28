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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 26,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 3,
              "raw": "3"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 52,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 47,
              "name": "bar"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "value": 5,
              "raw": "5"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 238,
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
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 238,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        },
                        "arguments": []
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 106,
                        "end": 110,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
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
                        "decorators": [],
                        "name": "Child",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 201,
                        "end": 205,
                        "name": "bar"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 411,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 411,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 281,
            "end": 294,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 281,
              "end": 285,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 288,
              "end": 293,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 384,
            "end": 397,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 384,
              "end": 388,
              "name": "bar"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 396,
              "value": "bar",
              "raw": "\"bar\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
            },
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 450,
            "decorators": [],
            "name": "accessChildProps",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
