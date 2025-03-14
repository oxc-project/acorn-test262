esDecorators-classExpression-namedEvaluation.7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
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
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 30,
          "definite": false,
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
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 38,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ClassExpression",
                "start": 171,
                "end": 185,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 182,
                  "end": 185,
                  "body": []
                },
                "declare": false,
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
                      "optional": false
                    }
                  }
                ],
                "id": null,
                "implements": [],
                "superClass": null
              }
            }
          ],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 189,
          "end": 192,
          "decorators": [],
          "name": "obj",
          "optional": false
        }
      }
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
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ClassExpression",
                "start": 199,
                "end": 221,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 205,
                  "end": 221,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 207,
                      "end": 219,
                      "computed": false,
                      "declare": false,
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
                            "optional": false
                          }
                        }
                      ],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
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
                      "value": null
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": null
              }
            }
          ],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 225,
          "end": 228,
          "decorators": [],
          "name": "obj",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
