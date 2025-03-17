__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "Base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "name": "known",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 58,
              "end": 59,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 83,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 78,
              "name": "sknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "VariableDeclaration",
      "start": 87,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 95,
            "end": 102,
            "callee": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 119,
      "expression": {
        "type": "MemberExpression",
        "start": 104,
        "end": 118,
        "object": {
          "type": "MemberExpression",
          "start": 104,
          "end": 111,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "name": "known",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 179,
      "expression": {
        "type": "MemberExpression",
        "start": 163,
        "end": 178,
        "object": {
          "type": "MemberExpression",
          "start": 163,
          "end": 171,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 171,
            "name": "sknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 172,
          "end": 178,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 241,
      "expression": {
        "type": "MemberExpression",
        "start": 224,
        "end": 240,
        "object": {
          "type": "MemberExpression",
          "start": 224,
          "end": 233,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 233,
            "name": "unknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 234,
          "end": 240,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 280,
      "expression": {
        "type": "MemberExpression",
        "start": 262,
        "end": 279,
        "object": {
          "type": "MemberExpression",
          "start": 262,
          "end": 272,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 264,
            "end": 272,
            "name": "sunknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 273,
          "end": 279,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
