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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 29,
                  "end": 43,
                  "argument": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "a",
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
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 82,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 65,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 110,
      "expression": {
        "type": "NewExpression",
        "start": 90,
        "end": 109,
        "arguments": [
          {
            "type": "Literal",
            "start": 102,
            "end": 104,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 106,
            "end": 108,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 94,
          "end": 101,
          "decorators": [],
          "name": "Derived",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 127,
      "expression": {
        "type": "NewExpression",
        "start": 111,
        "end": 126,
        "arguments": [
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 122,
          "decorators": [],
          "name": "Derived",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 142,
      "expression": {
        "type": "NewExpression",
        "start": 128,
        "end": 141,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 139,
          "decorators": [],
          "name": "Derived",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 173,
      "expression": {
        "type": "NewExpression",
        "start": 154,
        "end": 172,
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 168,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 170,
            "end": 171,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 158,
          "end": 165,
          "decorators": [],
          "name": "Derived",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 189,
      "expression": {
        "type": "NewExpression",
        "start": 174,
        "end": 188,
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 187,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 185,
          "decorators": [],
          "name": "Derived",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
