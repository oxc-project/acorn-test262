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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "_super",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 56,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 59,
              "end": 142,
              "properties": [
                {
                  "type": "Property",
                  "start": 69,
                  "end": 136,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 76,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 78,
                    "end": 136,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 84,
                      "end": 136,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 98,
                          "end": 114,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 102,
                              "end": 113,
                              "id": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 108,
                                "name": "_super",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                          "kind": "var",
                          "declare": false
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "name": "_super",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 163,
              "end": 165,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
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
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 351,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 313,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 222,
              "end": 313,
              "properties": [
                {
                  "type": "Property",
                  "start": 232,
                  "end": 307,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 239,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 241,
                    "end": 307,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 247,
                      "end": 307,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 261,
                          "end": 277,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 265,
                              "end": 276,
                              "id": {
                                "type": "Identifier",
                                "start": 265,
                                "end": 271,
                                "name": "_super",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                          "kind": "var",
                          "declare": false
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 331,
              "name": "_super",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 334,
              "end": 336,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
