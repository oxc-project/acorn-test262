__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
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
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "name": "field3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 165,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 63,
            "end": 91,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "name": "field1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 89,
              "end": 90,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 96,
            "end": 128,
            "key": {
              "type": "Literal",
              "start": 114,
              "end": 122,
              "value": "field2",
              "raw": "\"field2\""
            },
            "value": {
              "type": "Literal",
              "start": 126,
              "end": 127,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "static": false,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 101,
                      "end": 102,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 133,
            "end": 163,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 157,
              "name": "field3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "static": false,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
                      "value": 3,
                      "raw": "3"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
