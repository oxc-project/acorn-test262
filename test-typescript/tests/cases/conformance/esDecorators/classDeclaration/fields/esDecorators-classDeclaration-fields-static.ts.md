esDecorators-classDeclaration-fields-static.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
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
      "end": 159,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 159,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 89,
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
              "start": 78,
              "end": 84,
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
              "start": 87,
              "end": 88,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 124,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 94,
                "end": 101,
                "expression": {
                  "type": "CallExpression",
                  "start": 95,
                  "end": 101,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
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
              "start": 110,
              "end": 118,
              "raw": "\"field2\"",
              "value": "field2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 122,
              "end": 123,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 157,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 129,
                "end": 136,
                "expression": {
                  "type": "CallExpression",
                  "start": 130,
                  "end": 136,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 134,
                      "end": 135,
                      "raw": "3",
                      "value": 3
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 133,
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
              "start": 145,
              "end": 151,
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
              "start": 155,
              "end": 156,
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
