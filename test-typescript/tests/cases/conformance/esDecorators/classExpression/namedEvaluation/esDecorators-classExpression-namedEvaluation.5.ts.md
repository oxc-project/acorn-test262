__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
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
      "start": 160,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 161,
          "end": 183,
          "properties": [
            {
              "type": "Property",
              "start": 163,
              "end": 181,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 163,
                "end": 181,
                "left": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 167,
                  "end": 181,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 178,
                    "end": 181,
                    "body": []
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 167,
                      "end": 171,
                      "expression": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 171,
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
          "start": 186,
          "end": 189,
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
      "start": 192,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 193,
          "end": 223,
          "properties": [
            {
              "type": "Property",
              "start": 195,
              "end": 221,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 195,
                "end": 221,
                "left": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ClassExpression",
                  "start": 199,
                  "end": 221,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 205,
                    "end": 221,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 207,
                        "end": 219,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 213,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 207,
                            "end": 211,
                            "expression": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 211,
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
                          "start": 213,
                          "end": 218,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 215,
                            "end": 218
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
          "start": 226,
          "end": 229,
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
