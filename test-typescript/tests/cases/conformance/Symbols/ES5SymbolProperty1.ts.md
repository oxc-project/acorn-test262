__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 27,
        "name": "SymbolConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
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
      "start": 49,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 78,
            "name": "Symbol",
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
                  "name": "SymbolConstructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 98,
                  "end": 108,
                  "object": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 104,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 111,
                  "end": 112,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 132,
      "expression": {
        "type": "MemberExpression",
        "start": 116,
        "end": 131,
        "object": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "name": "obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "MemberExpression",
          "start": 120,
          "end": 130,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
