extendFromAny.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "decorators": [],
              "name": "known",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 58,
              "end": 59,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 83,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 78,
              "decorators": [],
              "name": "sknown",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 95,
            "end": 102,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 119,
      "expression": {
        "type": "MemberExpression",
        "start": 104,
        "end": 118,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 104,
          "end": 111,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "known",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 179,
      "expression": {
        "type": "MemberExpression",
        "start": 163,
        "end": 178,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 163,
          "end": 171,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 171,
            "decorators": [],
            "name": "sknown",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 172,
          "end": 178,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 241,
      "expression": {
        "type": "MemberExpression",
        "start": 224,
        "end": 240,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 224,
          "end": 233,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 233,
            "decorators": [],
            "name": "unknown",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 234,
          "end": 240,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 280,
      "expression": {
        "type": "MemberExpression",
        "start": 262,
        "end": 279,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 262,
          "end": 272,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 264,
            "end": 272,
            "decorators": [],
            "name": "sunknown",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 273,
          "end": 279,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
