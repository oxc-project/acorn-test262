__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 177,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 69,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 56,
        "end": 68,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 108,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 103,
              "end": 107,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 175,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 124,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 175,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 175,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 137,
                    "end": 169,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 143,
                        "end": 168,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 143,
                          "end": 151,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 145,
                              "end": 146,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 148,
                              "end": 149,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 149,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 149,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 154,
                          "end": 168,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 156,
                              "end": 160,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 157,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 159,
                                "end": 160,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "Property",
                              "start": 162,
                              "end": 166,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 162,
                                "end": 163,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 165,
                                "end": 166,
                                "raw": "2",
                                "value": 2
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
