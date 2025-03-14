t1.ts
```json
{
  "type": "Program",
  "start": 23,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "decorators": [],
            "name": "set",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 33,
            "end": 67,
            "properties": [
              {
                "type": "Property",
                "start": 39,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 46,
                  "end": 65,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 58,
                    "end": 65,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 47,
                      "end": 56,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 50,
                          "end": 56
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 75,
            "decorators": [],
            "name": "get",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 78,
            "end": 80,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 103,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 92,
          "end": 95,
          "exported": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "set",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "set",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 97,
          "end": 100,
          "exported": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "decorators": [],
            "name": "get",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "decorators": [],
            "name": "get",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
t2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 27,
        "raw": "\"./t1\"",
        "value": "./t1"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "set",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
t3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 35,
        "raw": "\"./t1\"",
        "value": "./t1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "set",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "yield",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
t4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "\"./t1\"",
        "value": "./t1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "get",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "get",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
