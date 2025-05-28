__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
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
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "field3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 46,
            "value": "field3",
            "raw": "\"field3\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 213,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 213,
        "body": [
          {
            "type": "TSAbstractAccessorProperty",
            "start": 72,
            "end": 113,
            "decorators": [
              {
                "type": "Decorator",
                "start": 72,
                "end": 79,
                "expression": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 79,
                  "callee": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 76,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 104,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "TSAbstractAccessorProperty",
            "start": 118,
            "end": 163,
            "decorators": [
              {
                "type": "Decorator",
                "start": 118,
                "end": 125,
                "expression": {
                  "type": "CallExpression",
                  "start": 119,
                  "end": 125,
                  "callee": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 123,
                      "end": 124,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 145,
              "end": 153,
              "value": "field2",
              "raw": "\"field2\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "TSAbstractAccessorProperty",
            "start": 168,
            "end": 211,
            "decorators": [
              {
                "type": "Decorator",
                "start": 168,
                "end": 175,
                "expression": {
                  "type": "CallExpression",
                  "start": 169,
                  "end": 175,
                  "callee": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 172,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 173,
                      "end": 174,
                      "value": 3,
                      "raw": "3"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 210,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
