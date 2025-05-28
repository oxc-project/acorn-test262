__ESTREE_TEST__:PASS:
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 25,
          "value": "./c",
          "raw": "'./c'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 63,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 62,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 95,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 94,
          "value": "./c.json",
          "raw": "'./c.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 119,
      "end": 174,
      "test": {
        "type": "Identifier",
        "start": 123,
        "end": 125,
        "decorators": [],
        "name": "x2",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 127,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 146,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 145,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 141,
                  "end": 145,
                  "object": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 143,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 172,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 171,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 160,
                  "end": 170,
                  "left": {
                    "type": "MemberExpression",
                    "start": 160,
                    "end": 164,
                    "object": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 162,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 14,
              "end": 18,
              "value": true,
              "raw": "true"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 20,
            "end": 30,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 30,
              "value": "hello",
              "raw": "\"hello\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
