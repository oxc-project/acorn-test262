esDecorators-classDeclaration-fields-nonStaticAccessor.ts
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
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "field3",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 46,
            "raw": "\"field3\"",
            "value": "field3"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 165,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 63,
            "end": 91,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 63,
                "end": 70,
                "expression": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 70,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "field1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 89,
              "end": 90,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 96,
            "end": 128,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 96,
                "end": 103,
                "expression": {
                  "type": "CallExpression",
                  "start": 97,
                  "end": 103,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 101,
                      "end": 102,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 100,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 114,
              "end": 122,
              "raw": "\"field2\"",
              "value": "field2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 126,
              "end": 127,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "AccessorProperty",
            "start": 133,
            "end": 163,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 133,
                "end": 140,
                "expression": {
                  "type": "CallExpression",
                  "start": 134,
                  "end": 140,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
                      "raw": "3",
                      "value": 3
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 157,
              "decorators": [],
              "name": "field3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "raw": "3",
              "value": 3
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
