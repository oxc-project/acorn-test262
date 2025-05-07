__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
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
      "start": 16,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 68,
            "end": 162,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 85,
                    "end": 156,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 92,
                      "end": 155,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 106,
                          "end": 120,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 111,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "NewExpression",
                            "start": 113,
                            "end": 120,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 120,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 134,
                          "end": 145,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 140,
                            "end": 145,
                            "raw": "false",
                            "value": false,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 216,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 169,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 175,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 176,
                "end": 184,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 216,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 198,
                    "end": 210,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 205,
                      "end": 209
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
        "start": 50,
        "end": 61,
        "decorators": [],
        "name": "FooIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 230,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 230,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 241,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 241,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
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
      "start": 243,
      "end": 271,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 243,
        "end": 270,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 243,
          "end": 252,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 247,
              "end": 251,
              "argument": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 255,
          "end": 270,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "decorators": [],
            "name": "FooIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
