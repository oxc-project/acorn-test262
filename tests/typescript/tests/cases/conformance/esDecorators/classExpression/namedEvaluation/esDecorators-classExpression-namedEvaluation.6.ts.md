__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
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
          "properties": [
            {
              "type": "Property",
              "start": 169,
              "end": 190,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 176,
                  "end": 190,
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
                    "start": 187,
                    "end": 190,
                    "body": []
                  },
                  "abstract": false,
                  "declare": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 195,
          "end": 198,
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
          "properties": [
            {
              "type": "Property",
              "start": 204,
              "end": 233,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 211,
                  "end": 233,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 217,
                    "end": 233,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 219,
                        "end": 231,
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
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "key": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 225,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 238,
          "end": 241,
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
