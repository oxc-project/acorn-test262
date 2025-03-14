typeOfThisInStaticMembers4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 54,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 43,
              "end": 53,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 49,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 53,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 161,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 161,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 95,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 93,
              "end": 94,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 122,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 111,
              "end": 121,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 117,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 111,
                  "end": 115
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 120,
                "end": 121,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 159,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 138,
              "end": 158,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 138,
                "end": 154,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 138,
                  "end": 145,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 138,
                    "end": 143
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 148,
                  "end": 154,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 148,
                    "end": 152
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
