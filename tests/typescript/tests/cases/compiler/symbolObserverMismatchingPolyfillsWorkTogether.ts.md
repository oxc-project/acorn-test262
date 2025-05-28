__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 27,
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 62,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 60,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 51,
              "decorators": [],
              "name": "observer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 53,
                "end": 59
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 63,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 90,
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 132,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 130,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 114,
              "decorators": [],
              "name": "observer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 116,
                "end": 129,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 123,
                  "end": 129
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 175,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 143,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 146,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 152,
                "end": 172,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 153,
                  "end": 168,
                  "object": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 159,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 168,
                    "decorators": [],
                    "name": "observer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 171,
                  "end": 172,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
