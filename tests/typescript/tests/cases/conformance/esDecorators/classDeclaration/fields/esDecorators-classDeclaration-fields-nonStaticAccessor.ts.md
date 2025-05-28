__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
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
      "end": 165,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
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
        "start": 57,
        "end": 165,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 63,
            "end": 91,
            "decorators": [
              {
                "type": "Decorator",
                "start": 63,
                "end": 70,
                "expression": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 70,
                  "callee": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
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
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 89,
              "end": 90,
              "value": 1,
              "raw": "1"
            },
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
            "type": "AccessorProperty",
            "start": 96,
            "end": 128,
            "decorators": [
              {
                "type": "Decorator",
                "start": 96,
                "end": 103,
                "expression": {
                  "type": "CallExpression",
                  "start": 97,
                  "end": 103,
                  "callee": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 100,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 101,
                      "end": 102,
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
              "start": 114,
              "end": 122,
              "value": "field2",
              "raw": "\"field2\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 126,
              "end": 127,
              "value": 2,
              "raw": "2"
            },
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
            "type": "AccessorProperty",
            "start": 133,
            "end": 163,
            "decorators": [
              {
                "type": "Decorator",
                "start": 133,
                "end": 140,
                "expression": {
                  "type": "CallExpression",
                  "start": 134,
                  "end": 140,
                  "callee": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
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
              "start": 151,
              "end": 157,
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "value": 3,
              "raw": "3"
            },
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
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
