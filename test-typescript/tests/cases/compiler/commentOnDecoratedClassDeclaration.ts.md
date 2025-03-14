commentOnDecoratedClassDeclaration.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "decorator",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 36,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 42,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 39,
          "end": 42
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 107,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 107,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 71,
          "end": 90,
          "expression": {
            "type": "CallExpression",
            "start": 72,
            "end": 90,
            "arguments": [
              {
                "type": "Literal",
                "start": 82,
                "end": 89,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 81,
              "decorators": [],
              "name": "decorator",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 103,
        "decorators": [],
        "name": "Remote",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 197,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 192,
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
              "start": 192,
              "end": 197,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 197,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 138,
          "end": 154,
          "expression": {
            "type": "CallExpression",
            "start": 139,
            "end": 154,
            "arguments": [
              {
                "type": "Literal",
                "start": 149,
                "end": 153,
                "raw": "\"hi\"",
                "value": "hi"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 139,
              "end": 148,
              "decorators": [],
              "name": "decorator",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 174,
        "decorators": [],
        "name": "AnotherRomote",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
