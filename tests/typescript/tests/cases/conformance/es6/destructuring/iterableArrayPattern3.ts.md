__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
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
      "type": "ClassDeclaration",
      "start": 16,
      "end": 43,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
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
      "type": "ClassDeclaration",
      "start": 44,
      "end": 218,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 68,
            "end": 162,
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
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 162,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 111,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "NewExpression",
                            "start": 113,
                            "end": 120,
                            "callee": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 120,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 134,
                          "end": 145,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 140,
                            "end": 145,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 169,
              "end": 184,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 175,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 176,
                "end": 184,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 216,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
      "type": "VariableDeclaration",
      "start": 220,
      "end": 239,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 230,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 238,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 238,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 238,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 265,
      "expression": {
        "type": "AssignmentExpression",
        "start": 240,
        "end": 264,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 240,
          "end": 246,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 249,
          "end": 264,
          "callee": {
            "type": "Identifier",
            "start": 253,
            "end": 264,
            "decorators": [],
            "name": "FooIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
