esDecorators-classExpression-namedEvaluation.6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
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
      "end": 200,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 198,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 167,
          "end": 192,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 169,
              "end": 190,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 172,
                "end": 190,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "ClassExpression",
                  "start": 176,
                  "end": 190,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 187,
                    "end": 190,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 176,
                      "end": 180,
                      "expression": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 180,
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
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 195,
          "end": 198,
          "decorators": [],
          "name": "obj",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 243,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 241,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 202,
          "end": 235,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 204,
              "end": 233,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 207,
                "end": 233,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "ClassExpression",
                  "start": 211,
                  "end": 233,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 217,
                    "end": 233,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 219,
                        "end": 231,
                        "computed": false,
                        "declare": false,
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 219,
                            "end": 223,
                            "expression": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 223,
                              "decorators": [],
                              "name": "dec",
                              "optional": false
                            }
                          }
                        ],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 225,
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
                          "start": 225,
                          "end": 230,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 227,
                            "end": 230
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
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 238,
          "end": 241,
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
