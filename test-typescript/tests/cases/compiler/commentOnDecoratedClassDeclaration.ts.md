__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "name": "decorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 36,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 103,
        "name": "Remote",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 107,
        "body": []
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 71,
          "end": 90,
          "expression": {
            "type": "CallExpression",
            "start": 72,
            "end": 90,
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 81,
              "name": "decorator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 82,
                "end": 89,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 174,
        "name": "AnotherRomote",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 192,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 197,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 197,
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 138,
          "end": 154,
          "expression": {
            "type": "CallExpression",
            "start": 139,
            "end": 154,
            "callee": {
              "type": "Identifier",
              "start": 139,
              "end": 148,
              "name": "decorator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 149,
                "end": 153,
                "value": "hi",
                "raw": "\"hi\""
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
