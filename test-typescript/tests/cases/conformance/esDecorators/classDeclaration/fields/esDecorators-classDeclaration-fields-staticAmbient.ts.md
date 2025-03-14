esDecorators-classDeclaration-fields-staticAmbient.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
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
      "end": 183,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 183,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 97,
            "computed": false,
            "declare": true,
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
              "start": 86,
              "end": 92,
              "decorators": [],
              "name": "field1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 95,
              "end": 96,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 102,
            "end": 140,
            "computed": true,
            "declare": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 102,
                "end": 109,
                "expression": {
                  "type": "CallExpression",
                  "start": 103,
                  "end": 109,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 107,
                      "end": 108,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 106,
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
              "start": 126,
              "end": 134,
              "raw": "\"field2\"",
              "value": "field2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 138,
              "end": 139,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 181,
            "computed": true,
            "declare": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 145,
                "end": 152,
                "expression": {
                  "type": "CallExpression",
                  "start": 146,
                  "end": 152,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 150,
                      "end": 151,
                      "raw": "3",
                      "value": 3
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 149,
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
              "start": 169,
              "end": 175,
              "decorators": [],
              "name": "field3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 179,
              "end": 180,
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
