file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "c1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 25,
          "raw": "'./c'",
          "value": "./c"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 62,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "c1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 64,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "decorators": [],
        "name": "c2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 95,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 94,
          "raw": "'./c.json'",
          "value": "./c.json"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 119,
      "end": 174,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 127,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 146,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 145,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 141,
                  "end": 145,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 143,
                    "decorators": [],
                    "name": "c2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 171,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 160,
                  "end": 170,
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 160,
                    "end": 164,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 162,
                      "decorators": [],
                      "name": "c1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 123,
        "end": 125,
        "decorators": [],
        "name": "x2",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 33,
      "expression": {
        "type": "ObjectExpression",
        "start": 9,
        "end": 32,
        "properties": [
          {
            "type": "Property",
            "start": 11,
            "end": 18,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
              "start": 14,
              "end": 18,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "Property",
            "start": 20,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
              "start": 23,
              "end": 30,
              "raw": "\"hello\"",
              "value": "hello"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
