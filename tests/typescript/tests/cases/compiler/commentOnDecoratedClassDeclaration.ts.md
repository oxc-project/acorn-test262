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
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 107,
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
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 82,
                "end": 89,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 107,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 199,
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
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 149,
                "end": 153,
                "value": "hi",
                "raw": "\"hi\""
              }
            ],
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 197,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 192,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 197,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 197,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
