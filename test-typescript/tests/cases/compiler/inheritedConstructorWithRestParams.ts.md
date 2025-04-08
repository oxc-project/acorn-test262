__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 29,
                  "end": 43,
                  "argument": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 35,
                      "end": 43,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 65,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 82,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 110,
      "expression": {
        "type": "NewExpression",
        "start": 90,
        "end": 109,
        "callee": {
          "type": "Identifier",
          "start": 94,
          "end": 101,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 102,
            "end": 104,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 106,
            "end": 108,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 127,
      "expression": {
        "type": "NewExpression",
        "start": 111,
        "end": 126,
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 122,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 142,
      "expression": {
        "type": "NewExpression",
        "start": 128,
        "end": 141,
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 139,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 173,
      "expression": {
        "type": "NewExpression",
        "start": 154,
        "end": 172,
        "callee": {
          "type": "Identifier",
          "start": 158,
          "end": 165,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 168,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 170,
            "end": 171,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 189,
      "expression": {
        "type": "NewExpression",
        "start": 174,
        "end": 188,
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 185,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 187,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
