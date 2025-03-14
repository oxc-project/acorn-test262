ES5SymbolProperty1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 46,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 27,
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 78,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 78,
                  "decorators": [],
                  "name": "SymbolConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 91,
            "end": 114,
            "properties": [
              {
                "type": "Property",
                "start": 97,
                "end": 112,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 98,
                  "end": 108,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 104,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 111,
                  "end": 112,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 132,
      "expression": {
        "type": "MemberExpression",
        "start": 116,
        "end": 131,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 120,
          "end": 130,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
