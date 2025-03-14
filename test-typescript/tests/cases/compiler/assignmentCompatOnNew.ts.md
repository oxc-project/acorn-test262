__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 11,
      "end": 12
    },
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 43,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 43,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 30,
              "end": 43,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 31,
                  "end": 42,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 41,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 41,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 56,
        "arguments": [
          {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
