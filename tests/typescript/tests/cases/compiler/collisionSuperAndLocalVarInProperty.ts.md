__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 351,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "_super",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 180,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 56,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 59,
              "end": 142,
              "properties": [
                {
                  "type": "Property",
                  "start": 69,
                  "end": 136,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 76,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 78,
                    "end": 136,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 84,
                      "end": 136,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 98,
                          "end": 114,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 102,
                              "end": 113,
                              "id": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 108,
                                "decorators": [],
                                "name": "_super",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Literal",
                                "start": 111,
                                "end": 113,
                                "value": 10,
                                "raw": "10"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "decorators": [],
              "name": "_super",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 163,
              "end": 165,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 351,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 351,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 313,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 222,
              "end": 313,
              "properties": [
                {
                  "type": "Property",
                  "start": 232,
                  "end": 307,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 239,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 241,
                    "end": 307,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 247,
                      "end": 307,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 261,
                          "end": 277,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 265,
                              "end": 276,
                              "id": {
                                "type": "Identifier",
                                "start": 265,
                                "end": 271,
                                "decorators": [],
                                "name": "_super",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Literal",
                                "start": 274,
                                "end": 276,
                                "value": 10,
                                "raw": "10"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 331,
              "decorators": [],
              "name": "_super",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 334,
              "end": 336,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
