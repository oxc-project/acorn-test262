unusedLocalsAndObjectSpread2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
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
      "start": 24,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 99,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 30,
            "end": 91,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 36,
                "end": 44,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 44,
                  "decorators": [],
                  "name": "children",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 44,
                  "decorators": [],
                  "name": "children",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 59,
                "end": 69,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "name": "active",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 69,
                  "decorators": [],
                  "name": "_a",
                  "optional": false
                }
              },
              {
                "type": "RestElement",
                "start": 82,
                "end": 89,
                "argument": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "decorators": [],
                  "name": "rest",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 94,
            "end": 99,
            "decorators": [],
            "name": "props",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 201,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 201,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 123,
            "end": 199,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 198,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 129,
                  "end": 190,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 139,
                      "end": 147,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 147,
                        "decorators": [],
                        "name": "children",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 147,
                        "decorators": [],
                        "name": "children",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 167,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 163,
                        "decorators": [],
                        "name": "active",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 167,
                        "decorators": [],
                        "name": "_a",
                        "optional": false
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 177,
                      "end": 184,
                      "argument": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 184,
                        "decorators": [],
                        "name": "rest",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "init": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 198,
                  "decorators": [],
                  "name": "props",
                  "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 227,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 227,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 216,
            "end": 226,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "decorators": [],
              "name": "asdf",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 223,
              "end": 226,
              "raw": "123",
              "value": 123
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
