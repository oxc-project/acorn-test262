__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 27
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observer",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 60
          }
        ],
        "start": 28,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observer",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 123,
                  "end": 129
                },
                "start": 116,
                "end": 129
              },
              "start": 114,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 130
          }
        ],
        "start": 91,
        "end": 132
      },
      "declare": false,
      "start": 63,
      "end": 132
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 143
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 159
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "observer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 168
                  },
                  "optional": false,
                  "computed": false,
                  "start": 153,
                  "end": 168
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 171,
                  "end": 172
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 152,
                "end": 172
              }
            ],
            "start": 146,
            "end": 174
          },
          "definite": false,
          "start": 140,
          "end": 174
        }
      ],
      "declare": false,
      "start": 134,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 175
}
```
