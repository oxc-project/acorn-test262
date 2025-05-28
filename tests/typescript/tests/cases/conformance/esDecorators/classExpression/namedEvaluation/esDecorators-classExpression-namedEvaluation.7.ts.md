__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 30,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 166,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 166,
          "end": 186,
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 167,
              "end": 185,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ClassExpression",
                "start": 171,
                "end": 185,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 171,
                    "end": 175,
                    "expression": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 175,
                      "decorators": [],
                      "name": "dec",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 182,
                  "end": 185,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 189,
          "end": 192,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 229,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 228,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 194,
          "end": 222,
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 195,
              "end": 221,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ClassExpression",
                "start": 199,
                "end": 221,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 205,
                  "end": 221,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 207,
                      "end": 219,
                      "decorators": [
                        {
                          "type": "Decorator",
                          "start": 207,
                          "end": 211,
                          "expression": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 211,
                            "decorators": [],
                            "name": "dec",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "key": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 213,
                        "end": 218,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 215,
                          "end": 218
                        }
                      },
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
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 225,
          "end": 228,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
