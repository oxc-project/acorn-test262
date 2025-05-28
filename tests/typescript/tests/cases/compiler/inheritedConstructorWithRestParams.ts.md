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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 48,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 29,
                  "end": 43,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 82,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 65,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 82,
        "body": []
      },
      "abstract": false,
      "declare": false
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
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        ]
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
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "value": "",
            "raw": "\"\""
          }
        ]
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
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
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
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        ]
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
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 187,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
