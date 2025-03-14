point.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 121,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 121,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 36,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 51,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 91,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 68,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 68,
              "end": 91,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 78,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 72,
                      "end": 78
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 119,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 111,
              "decorators": [],
              "name": "default",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 118,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 113,
                "end": 118,
                "literal": {
                  "type": "Literal",
                  "start": 113,
                  "end": 118,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 123,
      "end": 138,
      "expression": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "Point",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./point\"",
        "value": "./point"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "Point",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "Point",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 57,
            "end": 68,
            "arguments": [
              {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 66,
                "end": 67,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
