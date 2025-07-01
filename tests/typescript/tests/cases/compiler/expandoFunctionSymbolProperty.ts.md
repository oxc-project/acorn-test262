__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 78
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 87
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 81,
            "end": 89
          },
          "definite": false,
          "start": 74,
          "end": 89
        }
      ],
      "declare": false,
      "start": 68,
      "end": 90
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestSymb",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 110
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 119,
                "end": 123
              },
              "start": 117,
              "end": 123
            },
            "start": 115,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "symb",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 144,
                "end": 151
              },
              "start": 142,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 152
          }
        ],
        "start": 111,
        "end": 154
      },
      "declare": false,
      "start": 92,
      "end": 154
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 176
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestSymb",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 188
            },
            "typeArguments": null,
            "start": 180,
            "end": 188
          },
          "start": 178,
          "end": 188
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 207
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 210,
                "end": 212
              },
              "expression": false,
              "start": 193,
              "end": 212
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 220
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "symb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 225
                  },
                  "optional": false,
                  "computed": true,
                  "start": 215,
                  "end": 226
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 229,
                  "end": 233
                },
                "start": 215,
                "end": 233
              },
              "directive": null,
              "start": 215,
              "end": 234
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 249
              },
              "start": 237,
              "end": 250
            }
          ],
          "start": 189,
          "end": 252
        },
        "expression": false,
        "start": 163,
        "end": 252
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 156,
      "end": 252
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 68,
  "end": 252
}
```
