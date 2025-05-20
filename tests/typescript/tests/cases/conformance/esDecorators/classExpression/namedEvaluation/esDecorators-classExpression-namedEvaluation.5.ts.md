__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
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
      "start": 160,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 161,
          "end": 183,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 163,
              "end": 181,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 163,
                "end": 181,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ClassExpression",
                  "start": 167,
                  "end": 181,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 178,
                    "end": 181,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 167,
                      "end": 171,
                      "expression": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 171,
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "id": null,
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 186,
          "end": 189,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 231,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 193,
          "end": 223,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 195,
              "end": 221,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
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
                        "accessibility": null,
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
                              "optional": false,
                              "typeAnnotation": null
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
                          "optional": false,
                          "typeAnnotation": null
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
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 226,
          "end": 229,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
