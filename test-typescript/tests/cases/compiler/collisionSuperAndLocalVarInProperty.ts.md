collisionSuperAndLocalVarInProperty.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "_super",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 142,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 56,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 59,
              "end": 142,
              "properties": [
                {
                  "type": "Property",
                  "start": 69,
                  "end": 136,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 76,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 78,
                    "end": 136,
                    "async": false,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 108,
                                "decorators": [],
                                "name": "_super",
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 111,
                                "end": 113,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 166,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "decorators": [],
              "name": "_super",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 163,
              "end": 165,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 351,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 351,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 313,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 222,
              "end": 313,
              "properties": [
                {
                  "type": "Property",
                  "start": 232,
                  "end": 307,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 239,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 241,
                    "end": 307,
                    "async": false,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 265,
                                "end": 271,
                                "decorators": [],
                                "name": "_super",
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 274,
                                "end": 276,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 337,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 331,
              "decorators": [],
              "name": "_super",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 334,
              "end": 336,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
