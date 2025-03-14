/types/lib/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 19,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 17,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Lib",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/mod1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 44,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 44,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 29,
              "end": 42,
              "argument": {
                "type": "ObjectExpression",
                "start": 36,
                "end": 42,
                "properties": [
                  {
                    "type": "Property",
                    "start": 37,
                    "end": 41,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 21,
          "end": 26,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 23,
            "end": 26,
            "typeName": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "Lib",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/mod2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 26,
        "raw": "\"./mod1\"",
        "value": "./mod1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 52,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 47,
              "end": 52,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 47,
                "end": 50,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
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
  "sourceType": "module"
}
```
