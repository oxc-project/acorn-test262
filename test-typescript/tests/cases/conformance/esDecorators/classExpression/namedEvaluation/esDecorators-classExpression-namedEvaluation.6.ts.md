__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "properties": [
            {
              "type": "Property",
              "start": 169,
              "end": 190,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 172,
                "end": 190,
                "left": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 176,
                  "end": 190,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 187,
                    "end": 190,
                    "body": []
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 176,
                      "end": 180,
                      "expression": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 180,
                        "name": "dec",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 195,
          "end": 198,
          "name": "obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "properties": [
            {
              "type": "Property",
              "start": 204,
              "end": 233,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 207,
                "end": 233,
                "left": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 211,
                  "end": 233,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 217,
                    "end": 233,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 219,
                        "end": 231,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 225,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 219,
                            "end": 223,
                            "expression": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 223,
                              "name": "dec",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
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
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 238,
          "end": 241,
          "name": "obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
